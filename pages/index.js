import RecipeList from "@/components/RecipeList";

export default function HomePage({ storedRecipes }) {
  return (
    <main>
      <h1>Fork Yeah!</h1>
      <RecipeList storedRecipes={storedRecipes} />
    </main>
  );
}
