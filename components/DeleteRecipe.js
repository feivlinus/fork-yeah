import TrashBin from "public/svg/TrashBin.svg";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function DeleteRecipe({ onDeleteRecipe, recipeId }) {
  const router = useRouter();

  function handleDeleteAndReroute() {
    if (confirm("Are you sure?")) {
      onDeleteRecipe(recipeId);
      router.push("/");
    }
  }
  return (
    <StyledTrashBin onClick={() => handleDeleteAndReroute()}></StyledTrashBin>
  );
}
const StyledTrashBin = styled(TrashBin)`
  height: 35px;
  width: 35px;
`;
