import prisma from '../config/database';
import { CreateAnswer } from '../types/answerTypes';




export async function createAnswer (answer: CreateAnswer, questionId: number) {

    const answerObj = {... answer, questionId}

    await prisma.answers.create({
        data: answerObj
    });

}