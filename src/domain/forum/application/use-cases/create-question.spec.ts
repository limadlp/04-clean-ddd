import { InMemoryQuestionsRepository } from "./../../../../../test/repositories/in-memory-questions-repository";
import { expect, describe, beforeEach, it } from "vitest";
import { CreateQuestionUseCase } from "./create-question";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: CreateQuestionUseCase;

describe("Create Question", () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository);
  });

  it("should be able to create a question", async () => {
    const result = await sut.execute({
      authorId: "1",
      title: "Nova pergunta",
      content: "Conteúdo da pergunta",
      attachmentsIds: ['1', '2'],
    });



    expect(result.isRight()).toBe(true);
    expect(result.value?.question.content).toEqual("Conteúdo da pergunta");
    expect(inMemoryQuestionsRepository.items[0]).toEqual(result.value?.question);
    expect(inMemoryQuestionsRepository.items[0].attachments.currentItems).toHaveLength(2);
    expect(inMemoryQuestionsRepository.items[0].attachments.currentItems).toEqual([
      expect.objectContaining({attachmentId: new UniqueEntityID("1")}),
      expect.objectContaining({attachmentId: new UniqueEntityID("2")}),
    ]);
  });
});
