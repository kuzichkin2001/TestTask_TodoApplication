import { createStackNavigator, TransitionSpecs } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import Home from '../screens/Home/Home';
import TodosList from '../screens/TodosList/TodosList';
import CreateTodo from '../screens/CreateTodo/CreateTodo';
import CurrentTodo from '../screens/CurrentTodo/CurrentTodo';
import Delegation from '../screens/Delegation/Delegation';
import Statistics from '../screens/Statistics/Statistics';
import Comment from '../screens/Comment/Comment';
import Deny from '../screens/Deny/Deny';

const screens = {
  'Домашний экран': {
    screen: Home,
  },
  'Список всех задач': {
    screen: gestureHandlerRootHOC(TodosList),
  },
  'Создать задачу': {
    screen: gestureHandlerRootHOC(CreateTodo),
  },
  'Задача': {
    screen: gestureHandlerRootHOC(CurrentTodo),
  },
  'Делегирование задач': {
    screen: gestureHandlerRootHOC(Delegation),
  },
  'Статистика посещаемости': {
    screen: gestureHandlerRootHOC(Statistics),
  },
  'Комментарий': {
    screen: gestureHandlerRootHOC(Comment),
  },
  'Отклонение': {
    screen: gestureHandlerRootHOC(Deny),
  }
};

const forLeftSlide = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: false,
    ...forLeftSlide,
  },
});

export default createAppContainer(HomeStack);