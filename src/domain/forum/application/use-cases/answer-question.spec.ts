import { InMemoryAnswersRepository } from "test/repositories/in-memory-answers-repository";
import { expect, describe, beforeEach, it } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";


let inMemoryAnswersRepository: InMemoryAnswersRepository;
let sut: AnswerQuestionUseCase;

describe("Create Answer", () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository();
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository);
  });

  it("should be able to create an answer", async () => {
    const { answer } = await sut.execute({
      questionId: "1",
      instructorId: "1",
      content: "Conteúdo da resposta",
    });

    expect(answer.id).toBeTruthy;
    expect(answer.content).toEqual("Conteúdo da resposta");
    expect(inMemoryAnswersRepository.items[0].id).toEqual(answer.id);
  });
});
