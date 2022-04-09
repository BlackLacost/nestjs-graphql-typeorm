import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreatePetInputDto } from './dto/create-pet-input.dto'

import { Pet } from './pet.entity'

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private readonly petsRepository: Repository<Pet>,
  ) {}

  create(createPetInputDto: CreatePetInputDto): Promise<Pet> {
    const newPet = this.petsRepository.create(createPetInputDto)
    return this.petsRepository.save(newPet)
  }

  findAll(): Promise<Pet[]> {
    return this.petsRepository.find()
  }

  findOne(id: number): Promise<Pet> {
    return this.petsRepository.findOneOrFail(id)
  }
}
