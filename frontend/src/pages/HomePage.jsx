import { useAuth } from "../context/AuthContext.jsx";
import { Card } from "../components/ui";

export default function HomePage() {
  useAuth();

  return (
    <div>
      <Card>
        <h1 className="text-3xl font-bold my-4 uppercase">
          Welcome to PERN-TASKS!
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ex
          similique? Incidunt nam saepe hic fuga officia, consectetur voluptas!
          Delectus modi nesciunt quisquam, corporis ratione distinctio aut sint,
          asperiores maxime animi similique error dignissimos ea, et
          consequatur. Dolores molestiae exercitationem, officia, fuga quae nisi
          officiis, repellendus ea unde aperiam architecto.
        </p>
      </Card>
    </div>
  );
}
