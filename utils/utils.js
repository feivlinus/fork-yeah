import { v4 as uuidv4, v4 } from "uuid";

/**
 * Gives the forma data a id (at update) or uses uuidv4 (at create) if no id was given
 * also sums up the ingredients inputs. amount1 + ingredient1 becomes a object and so on
 * @param {object} formData
 * @param {string} id
 * @returns {object}
 */
export function prepareFormData(formData, id) {
  return {
    id: id ?? uuidv4(),
    name: formData.title,
    preparationTime: formData.duration,
    imageURL: formData.imgurl,
    description: formData.description,
    ingredients: [
      { quantity: formData.amount1, name: formData.ingredient1 },
      { quantity: formData.amount2, name: formData.ingredient2 },
      { quantity: formData.amount3, name: formData.ingredient3 },
      { quantity: formData.amount4, name: formData.ingredient4 },
    ],
  };
}
