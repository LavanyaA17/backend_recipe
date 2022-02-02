import mongoose from 'mongoose';
const { Schema } = mongoose;

const recipeSchema = new Schema({
  recipe_title: String,  // String is shorthand for {type: String}
  description: String,
  procedure:   String,
  image : String
});

const Recipe =  mongoose.model('RecipeSchema', recipeSchema);
export default Recipe;