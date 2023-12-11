import RecipeList from "@/components/RecipeList";

export default function HomePage({ recipes, onAddFavorite, onSearchFavorite }) {
  return (
    <main>
      <RecipeList
        recipes={recipes}
        onAddFavorite={onAddFavorite}
        onSearchFavorite={onSearchFavorite}
      />
    </main>
  );
}
