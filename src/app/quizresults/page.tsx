import QuizResults from "../components/calculator/QuizResults"
import { questions } from "@/app/data/QuizCalculatorArray";
export default function QuizResultsPagge(){
    
    return(
        <>
        <QuizResults
        Questions={questions}
        />
        </>
    )
}