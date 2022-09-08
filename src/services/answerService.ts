import * as questionRepository from '../repositories/questionRepository';
import * as answerRepository from '../repositories/answerRepository';
import { CreateAnswer } from '../types/answerTypes';



export async function createAnswer(answer: CreateAnswer, questionId: number) {

    const question = await questionRepository.findQuestionById(questionId);

    if (!question) {
        throw {type: 'not_found', message: 'Invalid questionId'};
    }
    
    await answerRepository.createAnswer(answer, questionId);

    return;
}