import {Entity, model, property} from '@loopback/repository';

@model()
export class Example extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  text: string;

  @property({
    type: 'number',
    required: true,
  })
  number: number;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<Example>) {
    super(data);
  }
}

export interface ExampleRelations {
  // describe navigational properties here
}

export type ExampleWithRelations = Example & ExampleRelations;
