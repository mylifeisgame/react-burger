import propTypes from 'prop-types';
import clsx from 'clsx';
import styles from './burger-ingredient-details.module.css';

const BurgerIngredientDetails = ({data}) => {
  const NutritionItem = ({name, value}) => {
    return (
      <div className={styles.NutritionItem}>
        <span className={clsx(
          styles.NutritionType,
          'text', 'text_type_main-default', 'text_color_inactive',
          'mb-2',
        )}>{name}</span>
        <span className={clsx(
          styles.NutritionItem,
          'text', 'text_type_digits-default', 'text_color_inactive',
        )}>{value}</span>
      </div>
    )
  }
  const NutritionInfo = [
    {
      name: 'Калории,ккал',
      value: data.calories,
    },
    {
      name: 'Белки,г',
      value: data.proteins,
    },
    {
      name: 'Жиры,г',
      value: data.fat,
    },
    {
      name: 'Углеводы,г',
      value: data.carbohydrates,
    },
  ]

  return (
    <div className={styles.BurgerIngredientDetails}>
      <img
        className={clsx(
          styles.ingredientImage,
          'mb-4',
        )}
        src={data.image_large}
        alt={data.name}
      />
      <p className={clsx(
        styles.ingredientName,
        'text', 'text_type_main-medium',
        'mb-8',
      )}>{data.name}</p>
      <div className={styles.ingredientNutrition}>
        {NutritionInfo.map((Nutrition, index) => (
          <NutritionItem
            name={Nutrition.name}
            value={Nutrition.value}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

BurgerIngredientDetails.propTypes = {
  data: propTypes.shape({
    image_large: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    calories: propTypes.number.isRequired,
    proteins: propTypes.number.isRequired,
    fat: propTypes.number.isRequired,
    carbohydrates: propTypes.number.isRequired,
  }).isRequired,
}

export default BurgerIngredientDetails