import RecipeList from "@/components/RecipeList";

export default function HomePage({ recipes, onAddFavorite, onSearchFavorite }) {
  return (
    <main>
      <h1>Fork Yeah!</h1>
      <RecipeList
        recipes={recipes}
        onAddFavorite={onAddFavorite}
        onSearchFavorite={onSearchFavorite}
      />
    </main>
  );
}
