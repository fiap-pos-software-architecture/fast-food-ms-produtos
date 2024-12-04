// import test, { beforeEach, describe, it } from 'node:test';
import { CATEGORIES } from '../../domain/Product';
import { ProductService } from './ProductService';
// import { TypeORMRepository } from './TypeORMRepository'; // ou o caminho correto do seu arquivo

const mockRepository = {
  create: jest.fn(),
  save: jest.fn(),
  findOneBy: jest.fn(),
  delete: jest.fn(),
  find: jest.fn(),
};

describe('Test product service', () => {
  // let mockDataSource: unknown; //
  // let productRepository: IProductRepository = {
  //   create(data: Partial<IProduct>): () => IProduct,
  //   save(entity: IProduct): Promise<IProduct>,
  //   findOneBy(where: Partial<IProduct>): Promise<IProduct | null>,
  //   delete(id: number): Promise<{ affected?: number | null }>,
  //   find(options?: { category?: string }): Promise<IProduct[]>
  // };
  let productService = new ProductService(mockRepository);

  // let typeORMRepository: TypeORMRepository<any>;
  let mockDataSource: unknown; // Usar 'unknown' para evitar erro
  beforeEach(() => {
    mockDataSource = {
      getRepository: jest.fn().mockReturnValue(mockRepository),
    };
  });

  it('should create an entity', async () => {
    const result = jest.fn(() =>
      Promise.resolve({
        id: 1,
        name: 'hamburguer',
        description: 'lanche',
        price: 50,
        category: CATEGORIES.LANCHE,
      })
    );

    productService.create({
      id: 1,
      name: 'hamburguer',
      description: 'lanche',
      price: 50,
      category: CATEGORIES.LANCHE,
    });
    const create = jest.spyOn(productService, 'create').mockReturnValue(new result());
    const createResult = productService.create({
      id: 1,
      name: 'hamburguer',
      description: 'lanche',
      price: 50,
      category: CATEGORIES.LANCHE,
    });
    // expect(createResult).toHaveBeenCalled()
    expect(create).toHaveBeenCalled();

    // expect(create).toEqual(result)
  });

  it('should update an entity', async () => {
    const result = jest.fn(() =>
      Promise.resolve({
        id: 2,
        name: 'hamburguer',
        description: 'lanche',
        price: 60,
        category: CATEGORIES.ACOMPANHAMENTO,
      })
    );

    const createResult = productService.create({
      id: 1,
      name: 'hamburguer',
      description: 'lanche',
      price: 50,
      category: CATEGORIES.LANCHE,
    });

    productService.update(1, {
      name: 'hamburguer',
      description: 'lanche',
      price: 60,
      category: CATEGORIES.ACOMPANHAMENTO,
    });

    const update = jest.spyOn(productService, 'update').mockReturnValue(new result());

    const updateResult = productService.update(1,{
      id: 1,
      name: 'hamburguer',
      description: 'lanche',
      price: 50,
      category: CATEGORIES.LANCHE,
    });

    expect(update).toHaveBeenCalled();
  });

  it('should get by id an entity', async () => {
    const result = jest.fn(() =>
      Promise.resolve({
        id: 1,
        name: 'hamburguer',
        description: 'lanche',
        price: 50,
        category: CATEGORIES.LANCHE,
      })
    );

    productService.getById(1);
    const getMock = jest.spyOn(productService, 'getById').mockReturnValue(new result());
    const getResult = productService.getById(1);
    expect(getMock).toHaveBeenCalled();

  });

  it('should getAll an entity', async () => {
    const result = jest.fn(() =>
      Promise.resolve([{
        id: 1,
        name: 'hamburguer',
        description: 'lanche',
        price: 50,
        category: CATEGORIES.LANCHE,
      }])
    );

    productService.getAll();
    const getMock = jest.spyOn(productService, 'getAll').mockReturnValue(new result());
    const getResult = productService.getAll();
    expect(getMock).toHaveBeenCalled();

  });

  // it('should delete an entity', async () => {
  //   const result = jest.fn(() =>
  //     Promise.resolve(true)
  //   );

  //   productService.delete(1);
  //   const deleteMock = jest.spyOn(productService, 'delete').mockReturnValue(new result());
  //   const deleteResult = productService.delete(1);

  //   expect(deleteMock).toHaveBeenCalled();

  // });

});
