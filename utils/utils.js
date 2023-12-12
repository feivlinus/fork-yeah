import { v4 as uuidv4, v4 } from "uuid";

/**
 * Gives the forma data a id (at update) or uses uuidv4 (at create) if no id was given
 * also sums up the ingredients inputs. amount1 + ingredient1 becomes a object and so on
 * @param {object} formData
 * @param {string} id
 * @returns {object}
 */
export function prepareFormData(formData, id) {
  const amountKeys = Object.keys(formData).filter((key) =>
    key.startsWith("amount-")
  );

  const pairs = amountKeys.map((key) => ({
    quantity: formData[key],
    name: formData[key.replace("amount-", "ingredient-")],
    id: uuidv4(),
  }));

  return {
    id: id ?? uuidv4(),
    name: formData.title,
    preparationTime: formData.duration,
    imageURL: formData.imageURL,
    description: formData.description,
    ingredients: pairs,
  };
}
