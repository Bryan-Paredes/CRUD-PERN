import { pool } from "../db.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../lib/jwt.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  if (result.rowCount === 0) {
    return res.status(400).json({ message: "Usuario no encontrado" });
  }
  const validPassword = await bcrypt.compare(password, result.rows[0].password);
  if (!validPassword) {
    return res.status(400).json({ message: "Contraseña incorrecta" });
  }
  const token = await createAccessToken({ id: result.rows[0].id });
  res.cookie("token", token, {
    httpOnly: true,
    //   secure: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
  return res.json(result.rows[0]);
};

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      "INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *",
      [name, email, hashedPassword]
    );

    const token = await createAccessToken({ id: result.rows[0].id });

    //set cookie
    res.cookie("token", token, {
      httpOnly: true,
      //   secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({ message: "Email ya existen" });
    }
  }
};

export const signout = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(200);
};

export const profile = (req, res) => res.send("Perfil de usuario");
