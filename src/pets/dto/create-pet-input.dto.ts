import { Field, InputType } from '@nestjs/graphql'
import { IsAlpha } from 'class-validator'

@InputType()
export class CreatePetInputDto {
  @IsAlpha()
  @Field()
  name: string

  @Field({ nullable: true })
  type?: string
}
