import {useState,useRef,useEffect,useCallback} from "react";
import {useDispatch,useSelector} from 'react-redux'
import styles from "./burger-ingridient-list.module.css";
import { getScrollHeight } from "../../utils/scrollbar-function";
import{
  BurgerIngredientDetails,
  Modal,
 IngredientsCategory,
 fetchIngredients
} from "../index.js";
import ingredientsPropTypes from "../../utils/proptypes";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Tab} from "@ya.praktikum/react-developer-burger-ui-components";
export default function BurgerIngredientList({ ingredients }) {
const dispatch = useDispatch()
  const [currentTab,setCurrent] = useState('buns')
  useEffect(
    () => {
      fetchIngredients()
    },
    [dispatch]
  );
  const tabsList = [
    {
      name: 'Булки',
      value: 'buns',
      activeFor: 'buns',
    },
    {
      name: 'Соусы',
      value: 'sauces',
      activeFor: 'sauces',
    },
    {
      name: 'Начинка',
      value: 'toppings',
      activeFor: 'toppings',
    }
  ]

  const ingredientListRef = useRef(null)
  const ingredientListScrollRef = useRef(null)
  const didMount = useRef(false)

  const setIngredientListScrollHeight = () => {
    const height = getScrollHeight(ingredientListRef.current, 'ingredientListScroll')
    ingredientListScrollRef.current.style.height = height
  }

  useEffect(() => {
    setIngredientListScrollHeight()
    window.addEventListener('resize', setIngredientListScrollHeight)

    return () => {
      window.removeEventListener('resize', setIngredientListScrollHeight)
    }
  }, [])

  const categoryBunsRef = useRef(null)
  const categorySaucesRef = useRef(null)
  const categoryToppingsRef = useRef(null)

  const tabScroll = useCallback(() => {
    const relativeTop = window.scrollY > ingredientListScrollRef.current.offsetTop
      ? window.scrollY
      : ingredientListScrollRef.current.offsetTop
    const scrollTo = {
      'buns': () => ingredientListScrollRef.current.scrollTo({
        behavior: "smooth",
        top: categoryBunsRef.current.offsetTop - relativeTop,
      }),
      'sauces': () => ingredientListScrollRef.current.scrollTo({
        behavior: "smooth",
        top: categorySaucesRef.current.offsetTop - relativeTop,
      }),
      'toppings': () => ingredientListScrollRef.current.scrollTo({
        behavior: "smooth",
        top: categoryToppingsRef.current.offsetTop - relativeTop,
      }),
    }

    scrollTo[currentTab]()
  }, [currentTab])

  useEffect(() => {
    didMount.current ? tabScroll() : didMount.current = true
  }, [tabScroll, currentTab])
  const getCategory = (type) => {
    const res = []
    ingredients.forEach((ingredient) => {
      if (ingredient.type === type) res.push(ingredient)
    })
    return res
  }
  const showIngredientDetails = (curIngredient) => {
    setIngredientDetails({
      show: true,
      data: curIngredient,
    })
  }
  const buns = getCategory('bun')
  const sauces = getCategory('sauce')
  const toppings = getCategory('main')
  const categoriesList = [
    {
      name: 'Булки',
      data: buns,
      ref: categoryBunsRef,
    },
    {
      name: 'Соусы',
      data: sauces,
      ref: categorySaucesRef,
    },
    {
      name: 'Начинка',
      data: toppings,
      ref: categoryToppingsRef,
    },
  ]


  const closeBurgerIngredientDetails = () => {
    setIngredientDetails({
      show: false,
      data: {},
    });
  };
  const [burgerIngredientDetails, setIngredientDetails] = useState({
    show: false,
    data: {},
  });
  return (
    <section className={styles.ingredientList} ref={ingredientListRef}>
    <h1 className={clsx(
      'text', 'text_type_main-large',
      'pt-10',
    )}>Соберите бургер</h1>
    <div className={clsx(
      styles.ingredientListTabs,
      'mt-5',
    )}>
      {tabsList.map((tab, index) => (
        <Tab
          value={tab.value}
          active={currentTab === tab.active}
          key={index}
          onClick={setCurrent}
        >{tab.name}</Tab>
      ))}
    </div>
    <div
      className={clsx(
        styles.ingredientListScroll,
        'mt-10',
      )}
      ref={ingredientListScrollRef}
    >
          {categoriesList.map((category, index) => (
            <IngredientsCategory
              name={category.name}
              data={category.data}
              ref={category.ref}
              key={index}
              onCardShow={showIngredientDetails}
            />
          ))}
      
      </div>
      {burgerIngredientDetails.show && (
        <Modal
          show={burgerIngredientDetails.show}
          title="Детали ингредиента"
          onClose={closeBurgerIngredientDetails}
        >
          <BurgerIngredientDetails data={burgerIngredientDetails.data} />
        </Modal>
      )}
    </section>
  );
};
BurgerIngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsPropTypes).isRequired,
 }

