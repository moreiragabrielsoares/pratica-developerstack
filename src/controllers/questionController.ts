import { Request, Response } from 'express';
import { CreateQuestion } from '../types/questionTypes';
import * as questionService from '../services/questionService';
import * as answerService from '../services/answerService';
import { CreateAnswer } from '../types/answerTypes';

export async function createQuestion(req: Request, res: Response) {

  const question: CreateQuestion = req.body;

  await questionService.createQuestion(question);

  res.status(201).send('Question created');

}

export async function createAnswer(req: Request, res: Response) {
  
  const questionId = parseInt(req.params.id);

  const answer: CreateAnswer = req.body;

  await answerService.createAnswer(answer, questionId);

  res.status(201).send('Answer created');
}

export async function get(req: Request, res: Response) {
  
  const questions = await questionService.findAllQuestions();

  res.status(200).send(questions);

}

export async function getById(req: Request, res: Response) {

  const questionId = parseInt(req.params.id);
  
  const question = await questionService.findQuestionByIdWithAnswers(questionId);

  res.status(200).send(question);

}
