'use client';

import Image from 'next/image'
import { Button, Card, List, ListItem, ListItemText, Paper } from '@mui/material';
import { red } from '@mui/material/colors';
import { useState } from 'react';

const ingredients = ["Bee", "Bear", "Chick", "Cloud", "Dino", "Flower", "Frog", "Heart", "Milk", "Milk (Strawberry)", "Mushroom", "Pig",
                   "Pineapple", "Planet", "Soda", "Star", "Sugar", "Tapioca"];

const recipes = new Map();

recipes.set("Bear Boba", ["Bear", "Bear", "Tapioca"]);
recipes.set("Bee Boba", ["Bee", "Bee", "Tapioca"]);
recipes.set("Black and White Boba", ["Cloud", "Tapioca", "Milk"]);
recipes.set("Boba Cheese Foam", ["Sugar", "Milk (Strawberry)", "Tapioca"]);
recipes.set("Brown Cat Boba", ["Soda", "Milk", "Tapioca"]);
recipes.set("Chick Boba", ["Chick", "Chick", "Tapioca"]);
recipes.set("Cloud Boba", ["Cloud", "Cloud", "Tapioca"]);
recipes.set("Deer Boba", ["Mushroom", "Flower", "Tapioca"]);
recipes.set("Diamond Boba", ["Planot", "Dino", "Tapioca"]);
recipes.set("Dinosaur Boba", ["Dino", "Dino", "Tapioca"]);
recipes.set("Dragon Boba", ["Cloud", "Dino", "Tapioca"]);
recipes.set("Dragon Cream", ["Dino", "Cloud", "Milk"]);
recipes.set("Dragon Fruit Boba", ["Dino", "Mushroom", "Tapioca"]);
recipes.set("Flower Boba", ["Flower", "Flower", "Tapioca"]);
recipes.set("Flower Syrup", ["Sugar", "Sugar", "Flower"]);
recipes.set("Frog Boba", ["Frog", "Frog", "Tapioca"]);
recipes.set("Galaxy Boba", ["Star", "Planet", "Tapioca"]);
recipes.set("Glitter Syrup", ["Star", "Star", "Cloud"]);
recipes.set("Gold Flakes & Whipped Cream", ["Milk (Strawberry)", "Star", "Bee"]);
recipes.set("Gummy Bears", ["Bear", "Bear", "Bear"]);
recipes.set("Heart Boba", ["Heart", "Heart", "Tapioca"]);
recipes.set("Honey", ["Bee", "Bee", "Bee"]);
recipes.set("Ice Cream Boba", ["Sugar", "Milk", "Tapioca"]);
recipes.set("Lychee Soda", ["Soda", "Soda", "Soda"]);
recipes.set("Marshmallows", ["Chick", "Chick", "Sugar"]);
recipes.set("Moon Boba", ["Heart", "Planet", "Tapioca"]);
recipes.set("Mushroom Boba", ["Heart", "Mushroom", "Tapioca"]);
recipes.set("Mushroom Jelly", ["Mushroom", "Mushroom", "Sugar"]);
recipes.set("Oreo Creme Brulee", ["Sugar", "Milk", "Milk"]);
recipes.set("Panda Bear Boba", ["Bear", "Bee", "Tapioca"]);
recipes.set("Pig Boba", ["Pig", "Pig", "Tapioca"]);
recipes.set("Pineapple", ["Pineapple", "Pineapple", "Pineapple"]);
recipes.set("Pineapple Jelly", ["Pineapple", "Pineapple", "Sugar"]);
recipes.set("Pink Dinosaur Boba", ["Dino", "Heart", "Tapioca"]);
recipes.set("Polar Bear Boba", ["Bear", "Soda", "Tapioca"]);
recipes.set("Polar Bear Syrup", ["Bear", "Soda", "Sugar"]);
recipes.set("Planet Boba", ["Planet", "Planet", "Tapioca"]);
recipes.set("Puppy Boba", ["Bear", "Chick", "Tapioca"]);
recipes.set("Rainbow Heart Boba", ["Heart", "Star", "Tapioca"]);
recipes.set("Rainbow Syrup", ["Heart", "Star", "Sugar"]);
recipes.set("Rose Petals", ["Flower", "Flower", "Flower"]);
recipes.set("Rose Petals Syrup", ["Flower", "Sugar", "Bee"]);
recipes.set("Sakura Petals", ["Flower", "Flower", "Heart"]);
recipes.set("Sakura Petals Soda", ["Flower", "Flower", "Bee"]);
recipes.set("Sprinkles", ["Bee", "Heart", "Pineapple"]);
recipes.set("Sprinkles & Whipped Cream", ["Milk (Strawberry)", "Sugar", "Sugar"]);
recipes.set("Star Boba", ["Star", "Star", "Tapioca"]);
recipes.set("Strawberry Cow Boba", ["Soda", "Bee", "Tapioca"]);
recipes.set("Strawberry Foam", ["Milk (Strawberry)", "Sugar", "Flower"]);
recipes.set("Strawberry Milk", ["Milk (Strawberry)", "Milk (Strawberry)", "Milk (Strawberry)"]);
recipes.set("Strawberries & Whipped Cream", ["Milk (Strawberry)", "Flower", "Sugar"]);
recipes.set("Sunflower Boba", ["Star", "Flower", "Tapioca"]);
recipes.set("Unicorn Boba", ["Soda", "Tapioca", "Soda"]);
recipes.set("White Cat Boba", ["Soda", "Tapioca", "Heart"]);
recipes.set("Whipped Cream", ["Milk", "Milk", "Milk"]);




export default function Home() {
  const [availableIngredients, setIngredients] = useState<Map<string, number>>(new Map());

  // Function to add a new key-value pair
  const addPair = (key: string, value: number) => {
    const newPairs = new Map(availableIngredients);
    newPairs.set(key, value);
    setIngredients(newPairs);
  };

  const updatePair = (key: string) => {
    setIngredients((prevIngredients) => {
      const newIngredients = new Map(prevIngredients);
      newIngredients.set(key, (newIngredients.get(key) || 0) + 1);
      return newIngredients;
    });
  }

  const decreasePair = (key: string) => {
    setIngredients((prevIngredients) => {
      const newIngredients = new Map(prevIngredients);
      newIngredients.set(key, (newIngredients.get(key) || 0) - 1);
      if ((newIngredients.get(key) || 1) < 1) {
        deletePair(key);
      }
      return newIngredients;
    });
    
  }

  const deletePair = (key: string) => {
    setIngredients((prevIngredients) => {
      const newIngredients = new Map(prevIngredients);
      newIngredients.delete(key);
      return newIngredients;
    });
  }

  const allAvailable = (ingredient1: string, ingredient2: string, ingredient3: string) => {
    return availableIngredients.has(ingredient1) && availableIngredients.has(ingredient2) && availableIngredients.has(ingredient3);
  }

  const hasEnoughIngredients = (ingredient1: string, ingredient2: string, ingredient3: string) => {
    const ingredientsInRecipe = new Map();
    ingredientsInRecipe.set(ingredient1, 1);
    if (ingredientsInRecipe.has(ingredient2)) {
      ingredientsInRecipe.set(ingredient2, ingredientsInRecipe.get(ingredient2) + 1);
    }
    else {
      ingredientsInRecipe.set(ingredient2, 1);
    }
    if (ingredientsInRecipe.has(ingredient3)) {
      ingredientsInRecipe.set(ingredient3, ingredientsInRecipe.get(ingredient3) + 1);
    }
    else {
      ingredientsInRecipe.set(ingredient3, 1);
    }
    return (ingredientsInRecipe.get(ingredient1) <= (availableIngredients.get(ingredient1) || 0) && 
    ingredientsInRecipe.get(ingredient2) <= (availableIngredients.get(ingredient2) || 0) &&
    ingredientsInRecipe.get(ingredient3) <= (availableIngredients.get(ingredient3) || 0))
  }

  const recipeIsRelevant = (ingredient1: string, ingredient2: string, ingredient3: string) => {
    if (allAvailable(ingredient1, ingredient2, ingredient3)) {
      return (hasEnoughIngredients(ingredient1, ingredient2, ingredient3))
    }
    return false;
  }

  const displayRecipes = () => {
    const availableRecipes = Array.from(recipes).map(([recipeName, ingredients]) => {
      if (recipeIsRelevant(ingredients[0], ingredients[1], ingredients[2])) {
        return recipeName;
      }
      return null;
    });
  
    return availableRecipes.filter((recipe) => recipe !== null);
  }
  
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <title>Magic Den Recipe Finder</title>
      <div className='fixed top-0 left-0 p-10 text-4xl font-sans'>
        <h1> Magic Den Recipe Finder</h1>
      </div>
      <div className='absolute overflow-y-scroll fixed left-0 p-10 flex flex-row'>
        <Card className='p-1'>
          <List>
            {ingredients.map((ingredient) => (
            <ListItem className="p-5" key={ingredient}>
              <Image
                  alt="ingredient"
                  src={`/icons/${ingredient}.jpeg`}
                  height={32}
                  width={32}/>
              {ingredient}
              <Button
                onClick={() => {
                  if (availableIngredients.has(ingredient)) {
                    updatePair(ingredient);
                  }
                  else {
                    addPair(ingredient, 1);
                  }
                }} 
                variant="outlined"
                sx={ {borderRadius: 10}}>
                +
              </Button>
            </ListItem>
          ))}
          </List>
        </Card>
        <Card className='p-1'>
          <List>
            {Array.from(availableIngredients.entries()).map(([key, value]) => (
              <ListItem key={key}>
                {key} x{value}
                <Button variant="outlined" 
                onClick={() => {
                  decreasePair(key);
                }}
                  sx={{borderRadius: 10}}>
                  -
                </Button>
                <Button variant="outlined"
                onClick={() => {
                  deletePair(key);
                }}>
                  Delete
                </Button>
              </ListItem>
            ))}
          </List>
        </Card>
        <div className="p-1">
          {displayRecipes().map((recipe, index) => (
            <Card className='p-10 flex flex-column' key={index}>
              <h1 className="text-2xl">{recipe}</h1>
              <div className='flex flex-row'>
                <Image
                  alt="ingredient"
                  src={`/icons/${recipes.get(recipe)[0]}.jpeg`}
                  height={64}
                  width={64}/>
                <Image
                  alt="ingredient"
                  src={`/icons/${recipes.get(recipe)[1]}.jpeg`}
                  height={64}
                  width={64}/>
                <Image
                  alt="ingredient"
                  src={`/icons/${recipes.get(recipe)[2]}.jpeg`}
                  height={64}
                  width={64}/>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
