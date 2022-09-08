import { CreateQuestion } from "../types/questionTypes";
import * as questionRepository from '../repositories/questionRepository';




export async function createQuestion(question: CreateQuestion) {

    await questionRepository.createQuestion(question);

    return;
}


export async function findAllQuestions () {

    const questions = await questionRepository.findAllQuestions();

    return { questions };
}


export async function findQuestionByIdWithAnswers (questionId: number) {

    const question = await questionRepository.findQuestionByIdWithAnswers(questionId);

    if (!question) {
        throw {type: 'not_found', message: 'Invalid questionId'};
    }

    return question;

}