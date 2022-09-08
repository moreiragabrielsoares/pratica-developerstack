import { CreateQuestion } from "../types/questionTypes";
import * as questionRepository from '../repositories/questionRepository';




export async function createQuestion(question: CreateQuestion) {

    await questionRepository.createQuestion(question);

    return;
}