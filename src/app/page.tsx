'use client';

import Image from 'next/image'
import { AppBar, Box, Button, Card, List, ListItem, ListItemText, Paper, Tab, Tabs, TextField, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { SyntheticEvent, useState } from 'react';

const ingredients = ["Bee", "Bear", "Chick", "Cloud", "Dino", "Flower", "Frog", "Heart", "Milk", "Milk (Strawberry)", "Mushroom", "Pig",
                   "Pineapple", "Planet", "Soda", "Star", "Sugar", "Tapioca"];

const recipes = new Map();

const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

recipes.set("Autumn Leaf Boba", ["Cloud", "Flower", "Tapioca"]);
recipes.set("Bear Boba", ["Bear", "Bear", "Tapioca"]);
recipes.set("Bee Boba", ["Bee", "Bee", "Tapioca"]);
recipes.set("Black and White Boba", ["Cloud", "Tapioca", "Milk"]);
recipes.set("Black Cat Paw Boba", ["Cloud", "Heart", "Tapioca"]);
recipes.set("Boba Cheese Foam", ["Sugar", "Milk (Strawberry)", "Tapioca"]);
recipes.set("Bread Boba", ["Milk (Strawberry)", "Milk", "Tapioca"]);
recipes.set("Brown Cat Boba", ["Soda", "Milk", "Tapioca"]);
recipes.set("Chick Boba", ["Chick", "Chick", "Tapioca"]);
recipes.set("Cloud Boba", ["Cloud", "Cloud", "Tapioca"]);
recipes.set("Cow Boba", ["Chick", "Milk", "Tapioca"]);
recipes.set("Deer Boba", ["Mushroom", "Flower", "Tapioca"]);
recipes.set("Diamond Boba", ["Planet", "Dino", "Tapioca"]);
recipes.set("Dinosaur Boba", ["Dino", "Dino", "Tapioca"]);
recipes.set("Dragon Boba", ["Cloud", "Dino", "Tapioca"]);
recipes.set("Dragon Cream", ["Dino", "Cloud", "Milk"]);
recipes.set("Dragon Fruit Boba", ["Dino", "Mushroom", "Tapioca"]);
recipes.set("Fish Boba", ["Cloud", "Mushroom", "Tapioca"]);
recipes.set("Flower Boba", ["Flower", "Flower", "Tapioca"]);
recipes.set("Flower Syrup", ["Sugar", "Sugar", "Flower"]);
recipes.set("Frog Boba", ["Frog", "Tapioca", "Tapioca"]);
recipes.set("Galaxy Boba", ["Star", "Planet", "Tapioca"]);
recipes.set("Glitter Syrup", ["Star", "Star", "Cloud"]);
recipes.set("Gold Flakes & Whipped Cream", ["Milk (Strawberry)", "Star", "Bee"]);
recipes.set("Gummy Bears", ["Bear", "Bear", "Bear"]);
recipes.set("Gummy Worms", ["Cloud", "Sugar", "Sugar"]);
recipes.set("Heart Boba", ["Heart", "Heart", "Tapioca"]);
recipes.set("Honey", ["Bee", "Bee", "Bee"]);
recipes.set("Ice Cream Boba", ["Sugar", "Milk", "Tapioca"]);
recipes.set("Koala Boba", ["Cloud", "Bear", "Tapioca"]);
recipes.set("Lychee Soda", ["Soda", "Soda", "Soda"]);
recipes.set("Marshmallows", ["Chick", "Chick", "Sugar"]);
recipes.set("Moon Boba", ["Heart", "Planet", "Tapioca"]);
recipes.set("Mushroom Boba", ["Heart", "Mushroom", "Tapioca"]);
recipes.set("Mushroom Jelly", ["Mushroom", "Mushroom", "Sugar"]);
recipes.set("Oreo Creme Brulee", ["Sugar", "Milk", "Milk"]);
recipes.set("Panda Bear Boba", ["Bear", "Bee", "Tapioca"]);
recipes.set("Pig Boba", ["Pig", "Pig", "Tapioca"]);
recipes.set("Pineapple", ["Pineapple", "Pineapple", "Pineapple"]);
recipes.set("Pineapple Boba", ["Pineapple", "Pineapple", "Tapioca"]);
recipes.set("Pineapple Jelly", ["Pineapple", "Pineapple", "Sugar"]);
recipes.set("Pink Dinosaur Boba", ["Dino", "Heart", "Tapioca"]);
recipes.set("Polar Bear Boba", ["Bear", "Soda", "Tapioca"]);
recipes.set("Polar Bear Syrup", ["Bear", "Soda", "Sugar"]);
recipes.set("Planet Boba", ["Planet", "Planet", "Tapioca"]);
recipes.set("Pumpkin Boba", ["Mushroom", "Star", "Tapioca"]);
recipes.set("Puppy Boba", ["Bear", "Chick", "Tapioca"]);
recipes.set("Rainbow Heart Boba", ["Heart", "Star", "Tapioca"]);
recipes.set("Rainbow Syrup", ["Heart", "Star", "Sugar"]);
recipes.set("Ribbon Bear Boba", ["Heart", "Milk (Strawberry)", "Tapioca"]);
recipes.set("Rose Petals", ["Flower", "Flower", "Flower"]);
recipes.set("Rose Petals Syrup", ["Flower", "Sugar", "Bee"]);
recipes.set("Royal Milk Tea", ["Milk (Strawberry)", "Milk (Strawberry)", "Tapioca"]);
recipes.set("Sakura Petals", ["Flower", "Flower", "Heart"]);
recipes.set("Sakura Petals Soda", ["Flower", "Flower", "Bee"]);
recipes.set("Smiley Face Boba", ["Star", "Milk (Strawberry)", "Tapioca"]);
recipes.set("Sprinkles", ["Bee", "Heart", "Pineapple"]);
recipes.set("Sprinkles & Whipped Cream", ["Milk (Strawberry)", "Sugar", "Sugar"]);
recipes.set("Star Boba", ["Star", "Star", "Tapioca"]);
recipes.set("Strawberry Cow Boba", ["Soda", "Bee", "Tapioca"]);
recipes.set("Strawberry Foam", ["Milk (Strawberry)", "Sugar", "Flower"]);
recipes.set("Strawberry Milk", ["Milk (Strawberry)", "Milk (Strawberry)", "Milk (Strawberry)"]);
recipes.set("Strawberries & Whipped Cream", ["Milk (Strawberry)", "Flower", "Sugar"]);
recipes.set("Sunflower Boba", ["Star", "Flower", "Tapioca"]);
recipes.set("Unicorn Boba", ["Soda", "Tapioca", "Soda"]);
recipes.set("White Bunny Boba", ["Cloud", "Sugar", "Soda"]);
recipes.set("White Cat Boba", ["Soda", "Tapioca", "Heart"]);
recipes.set("Whipped Cream", ["Milk", "Milk", "Milk"]);


interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

interface RecipeProps {
  name: string;
  index: number;
  ingredient1: string;
  ingredient2: string;
  ingredient3: string;
}

function Recipe(props: RecipeProps) {
  const {name, index, ingredient1, ingredient2, ingredient3} = props;

  return (
    <Card className='p-10 flex flex-column' key={index}>
      <h1 className="text-2xl">{name}</h1>
      <div className='flex flex-row'>
        <img
          alt={ingredient1}
          src={`/icons/${ingredient1}.png`}
          height={64}
          width={64}
          style={{ minWidth: 64, maxWidth: 64, minHeight: 64, maxHeight: 64}}/>
        <img
          alt={ingredient2}
          src={`/icons/${ingredient2}.png`}
          height={64}
          width={64}
          style={{ minWidth: 64, maxWidth: 64, minHeight: 64, maxHeight: 64}}/>
        <img
          alt={ingredient3}
          src={`/icons/${ingredient3}.png`}
          height={64}
          width={64}
          style={{ minWidth: 64, maxWidth: 64, minHeight: 64, maxHeight: 64}}/>
      </div>
    </Card>
  )
}

export default function Home() {
  const [availableIngredients, setIngredients] = useState<Map<string, number>>(new Map());
  const [tab, setTab] = useState(0);
  const [letter, setLetter] = useState('?');
  const [query, setQuery] = useState("");
  const ingredientsTab = () => {
    setTab(0);
  }
  const handleTabs = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleAlphabetTabs = (event: React.SyntheticEvent, newValue: string) => {
    setLetter(newValue);
  };

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

  const displayRecipesByName = () => {
    const availableRecipes = Array.from(recipes).map(([recipeName, ingredients]) => {
      if (recipeName.charAt(0) == letter.charAt(0)) {
        return recipeName;
      }
      return null;
    });
  
    return availableRecipes.filter((recipe) => recipe !== null);
  }

  const displayRecipesBySearch = () => {
    const availableRecipes = Array.from(recipes).map(([recipeName, ingredients]) => {
      if (recipeName.toLowerCase().includes(query.toLowerCase())) {
        return recipeName;
      }
      return null;
    });
  
    return availableRecipes.filter((recipe) => recipe !== null);
  }
  
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <title>Magic Den Recipe Finder</title>
      <div className='flex flex-col'>
        <div className='fixed top-0 left-0 p-10 text-4xl font-sans'>
          <h1> Magic Den Recipe Finder</h1>
        </div>
        
      </div>
      
      
      <div className='absolute overflow-y-scroll fixed left-0 p-10 flex flex-col'>
        <Tabs
        value={tab}
        onChange={handleTabs}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        >
          <Tab value={0} label="ingredients"/>
          <Tab value={1} label="recipes"/>
        </Tabs>
        {tab==0 && 
          <div className='flex flex-row'>
            <Card className='p-1'>
              <List>
                {ingredients.map((ingredient) => (
                <ListItem className="p-5" key={ingredient}>
                  <img
                      alt={ingredient}
                      src={`/icons/${ingredient}.png`}
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
                    <img
                      alt={key}
                      src={`/icons/${key}.png`}
                      height={32}
                      width={32}/>
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
                <Recipe
                name={recipe}
                index={index}
                ingredient1={recipes.get(recipe)[0]}
                ingredient2={recipes.get(recipe)[1]}
                ingredient3={recipes.get(recipe)[2]}/>
              ))}
            </div>
          </div>
        }
        {tab==1 && 
          <div>
            <Tabs
            value={tab}
            onChange={handleAlphabetTabs}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            >
              <Tab value='?' label="Search" style={{minWidth: 50}}/>
              {Array.from(alphabet).map((letter) => (
                <Tab value={letter} label={letter} style={{ minWidth: 50 }}/>
              ))}
            </Tabs>
            {letter=="?" &&
              <div>
                <TextField label="Search" 
                placeholder="search"
                sx={{borderRadius: 80}}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setQuery(event.target.value);
                }}/>
                {displayRecipesBySearch().map((recipe, index) => (
                  <Recipe
                  name={recipe}
                  index={index}
                  ingredient1={recipes.get(recipe)[0]}
                  ingredient2={recipes.get(recipe)[1]}
                  ingredient3={recipes.get(recipe)[2]}/>
                ))}
              </div>}
            {displayRecipesByName().map((recipe, index) => (
              <Recipe
              name={recipe}
              index={index}
              ingredient1={recipes.get(recipe)[0]}
              ingredient2={recipes.get(recipe)[1]}
              ingredient3={recipes.get(recipe)[2]}/>
            ))}
          </div>}
        
        <desc>DISCLAIMER: I own none of the art, this was just a fun project I wanted to do to hone my programming skills.</desc>
      </div>
    </main>
  )
}
