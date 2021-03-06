import {Ingredients} from './ingredients';

export class Fridge {
    constructor() {
        this.recipesCount = 0;
        this.header = 'Fridge';
        this.ingredients = [];
        this.ingredientsDescrpList = [];
        this.ingredientsDescription = '';
    }

    checkActiveIngredients(ingredient) {
        if (ingredient.done) {
          this.counterDown();
        } else {
          this.counterUp();
        }
    }

    addIngredient() {
        if (this.ingredientsDescrpList.indexOf(this.ingredientsDescription) <= -1) {
            this.ingredientsDescrpList.push(this.ingredientsDescription);
            this.ingredients.push(new Ingredients(this.ingredientsDescription));
            this.ingredientsDescription = '';
            this.counterUp();
        }
        
    }

    removeAll() {
      this.ingredients = [];
      this.ingredientsDescrpList = [];
      this.recipesCount = 0;
    }
    
    removeSelected() {
      let toStay = [];
      let toDescrStay = [];
      for (let ingrIndx = 0; ingrIndx < this.ingredients.length; ingrIndx++) {
        if (!this.ingredients[ingrIndx].done) {
          toStay.push(this.ingredients[ingrIndx]);
          toDescrStay.push(this.ingredients[ingrIndx].description); // Check this
        }
      }
      console.log(toDescrStay);
      this.ingredients = toStay;
      this.ingredientsDescrpList = toDescrStay; 
    }

    removeIngredient(ingredient) {
        let index = this.ingredients.indexOf(ingredient);
        this.ingredients.splice(index, 1);
        this.ingredientsDescrpList.splice(this.ingredientsDescrpList.indexOf(ingredient.description), 1);
        if(!ingredient.done) {
          this.counterDown();
        }
        
    }

    counterUp() {
        this.recipesCount += 1;
    }

    counterDown() {
        this.recipesCount -= 1;
    }

    checkRecipes() {
        for (let ingrIndx = 0; ingrIndx < this.ingredients.length; ingrIndx++) {
            if (!this.ingredients[ingrIndx].done) {
                console.log(this.ingredients[ingrIndx].description); 
            }
        }
    }
}
