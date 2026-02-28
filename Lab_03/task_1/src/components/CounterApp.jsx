import StepCounter from "./StepCounter";

const CounterApp = () => {
    /*

    Пропсы - это входные данные, которые передаются от родителя к ребенку.
    Они доступны только для чтения и не могут быть изменены внутри компонента.

    Состояние (state) - это внутренние данные компонента, которые могут изменяться.
    Состояние управляется внутри компонента и может быть изменено с помощью специальных функций (например, useState в React).

    */
   return (
    <div>
        <StepCounter initialValue={0} step={1} />
        <StepCounter initialValue={10} step={5} />
    </div>
   )
}

export default CounterApp;