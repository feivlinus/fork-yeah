import RecipeList from "@/components/RecipeList";

export default function HomePage({ recipes }) {
  return (
    <main>
      <h1>Fork Yeah!</h1>
      <RecipeList recipes={recipes} />
    </main>
  );
}
