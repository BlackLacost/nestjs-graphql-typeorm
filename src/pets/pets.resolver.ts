import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'

import { Pet } from './pet.entity'
import { PetsService } from './pets.service'
import { CreatePetInputDto } from './dto/create-pet-input.dto'

@Resolver(of => Pet)
export class PetsResolver {
  constructor(private readonly petsService: PetsService) {}

  @Query(returns => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll()
  }

  @Query(returns => Pet)
  pet(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
    return this.petsService.findOne(id)
  }

  @Mutation(returns => Pet)
  create(
    @Args('createPetInputDto') createPetInputDto: CreatePetInputDto,
  ): Promise<Pet> {
    return this.petsService.create(createPetInputDto)
  }
}
