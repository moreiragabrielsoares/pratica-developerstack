import prisma from '../config/database';
import { CreateQuestion } from '../types/questionTypes';



export async function createQuestion (question: CreateQuestion) {

    await prisma.questions.create({
        data: question
    });

}

export async function findQuestionById (questionId: number) {

    return prisma.questions.findFirst({
        where: {id: questionId}
    })

}

export async function findAllQuestions () {

    return prisma.questions.findMany();

}


export async function findQuestionByIdWithAnswers (questionId: number) {

    return prisma.questions.findUnique({
        where: {
            id: questionId
        },
        include: {
            answers: {
                select: {
                    answeredBy: true,
                    answer: true
                }
            }
        }
    });

}