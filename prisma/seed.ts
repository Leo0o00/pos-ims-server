/*
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function deleteAllData(orderedFileNames: string[]) {
  const modelNames = orderedFileNames.map((fileName) => {
    const modelName = path.basename(fileName, path.extname(fileName));
    return modelName.charAt(0).toUpperCase() + modelName.slice(1);
  });

  for (const modelName of modelNames) {
    const model: any = prisma[modelName as keyof typeof prisma];
    if (model) {
      await model.deleteMany({});
      console.log(`Cleared data from ${modelName}`);
    } else {
      console.error(
        `Model ${modelName} not found. Please ensure the model name is correctly specified.`,
      );
    }
  }
}

async function main() {
  const dataDirectory = path.join(__dirname, 'seedData');

  const orderedFileNames = [
    'points_of_sales.json',
    'products_categories.json',
    'providers.json',
    'products.json',
    'employees.json',
    'salary.json',
    'purchases.json',
    'products_purchases.json',
    'sales.json',
    'products_sales.json',
    // "users.json",

    // "expenses_category.json",
    // "expenses.json",
  ];

  await deleteAllData(orderedFileNames);

  for (const fileName of orderedFileNames) {
    const filePath = path.join(dataDirectory, fileName);
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const modelName = path.basename(fileName, path.extname(fileName));
    const model: any = prisma[modelName as keyof typeof prisma];

    if (!model) {
      console.error(`No Prisma model matches the file name: ${fileName}`);
      continue;
    }

    for (const data of jsonData) {
      await model.create({
        data,
      });
    }

    console.log(`Seeded ${modelName} with data from ${fileName}`);
  }
}

async function main() {
  // points_of_sales
  const candonga = await prisma.points_of_sales.upsert({
    where: { point_of_sales_id: 'bff9b7b6-b737-411c-92ae-737ac97711b7' }, // Adjust the condition as needed
    update: {},
    create: {
      name: 'Candonga',
      address: 'Hospital',
    },
  });
  const miCasa = await prisma.points_of_sales.upsert({
    where: { point_of_sales_id: 'f619c517-9dbb-43fe-b15f-805a2151145d' }, // Adjust the condition as needed
    update: {},
    create: {
      name: 'Mi casa',
      address: 'Condado',
    },
  });
  const puntoPlacetas = await prisma.points_of_sales.upsert({
    where: { point_of_sales_id: 'c45b5ee2-d5d0-4ba2-914e-cab578106a2f' }, // Adjust the condition as needed
    update: {},
    create: {
      name: 'Punto Placetas',
      address: 'Placetas',
    },
  });
  const almacen = await prisma.points_of_sales.upsert({
    where: { point_of_sales_id: 'b924a5fe-3435-4042-b1c2-b997e231bf42' }, // Adjust the condition as needed
    update: {},
    create: {
      name: 'Almacen',
      address: 'Santa Clara',
    },
  });
  console.log("Seeded: 'Point of sales'", {
    candonga,
    miCasa,
    puntoPlacetas,
    almacen,
  });
  // products_categories
  const electrodomestico = await prisma.products_categories.upsert({
    where: { products_categories_id: '80bcd2f2-f3b3-47f6-85eb-38947e036bde' }, // Adjust the condition as needed
    update: {},
    create: {
      name: 'Electrodomestico',
    },
  });
  const herramienta = await prisma.products_categories.upsert({
    where: { products_categories_id: 'b723206a-132b-442c-84db-a990de764957' }, // Adjust the condition as needed
    update: {},
    create: {
      name: 'Herramienta',
    },
  });
  const materiaPrima = await prisma.products_categories.upsert({
    where: { products_categories_id: '2a6ac5ae-ff11-4108-9d51-9e7a7c829f98' }, // Adjust the condition as needed
    update: {},
    create: {
      name: 'Materia Prima',
    },
  });
  const celular = await prisma.products_categories.upsert({
    where: { products_categories_id: '18a778c3-e8bb-4ac5-bea7-857ecd36e457' }, // Adjust the condition as needed
    update: {},
    create: {
      name: 'Celular',
    },
  });
  console.log("Seeded: 'Products Categories'", {
    electrodomestico,
    herramienta,
    materiaPrima,
    celular,
  });
  // providers
  const alberto = await prisma.providers.upsert({
    where: { provider_id: '80ffbfca-5277-46e1-b337-4add8e3924ec' }, // Adjust the condition as needed
    update: {},
    create: {
      name: 'Alberto',
      phone_number: '55555555',
      email: 'alberto@gmail.com',
    },
  });
  const pedro = await prisma.providers.upsert({
    where: { provider_id: 'fbc5921c-3ddf-45af-8a11-38839be8dcb2' }, // Adjust the condition as needed
    update: {},
    create: {
      name: 'Pedro',
      phone_number: '66666666',
      email: 'pedro@gmail.com',
    },
  });
  const juan = await prisma.providers.upsert({
    where: { provider_id: '2705cdd9-d161-4290-a261-47f61e30f3cd' }, // Adjust the condition as needed
    update: {},
    create: {
      name: 'Juan',
      phone_number: '77777777',
      email: 'juan@gmail.com',
    },
  });
  const martin = await prisma.providers.upsert({
    where: { provider_id: 'fc61fa78-dd26-4b52-8167-d2584330b0ce' }, // Adjust the condition as needed
    update: {},
    create: {
      name: 'Martin',
      phone_number: '88888888',
      email: 'martin@gmail.com',
    },
  });
  console.log("Seeded: 'Products Categories'", {
    alberto,
    pedro,
    juan,
    martin,
  });
  // products
  // employees
  // salary
  // purchases
  // products_purchases
  // sales
  // products_sales
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
*/

import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path'; // Asegúrate de que esta importación esté presente y correcta

// --- Descomenta y usa esto si '__dirname' no está disponible (común en módulos ES6) ---
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename); // Ahora __dirname apuntará al directorio del script actual
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

const prisma = new PrismaClient();

/**
 * Convierte un nombre de archivo (ej. 'products_categories.json')
 * al nombre de la propiedad del modelo en el cliente Prisma (ej. 'productsCategories').
 * @param fileName El nombre del archivo JSON.
 * @returns El nombre de la clave del modelo en camelCase.
 */
function filenameToPrismaModelKey(fileName: string): string {
  const baseName = path.basename(fileName, path.extname(fileName));
  // Convierte snake_case (ej. products_categories) a camelCase (ej. productsCategories)
  return baseName.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}

async function deleteAllData(orderedFileNames: string[]) {
  console.log('Limpiando datos existentes...');
  // Es crucial eliminar en el orden inverso a la creación para respetar las restricciones de clave externa.
  for (const fileName of [...orderedFileNames].reverse()) {
    const modelKey = filenameToPrismaModelKey(fileName);
    const model: any = prisma[modelKey as keyof typeof prisma];

    if (model && typeof model.deleteMany === 'function') {
      try {
        const { count } = await model.deleteMany({});
        console.log(`Datos eliminados de ${modelKey} (${count} registros).`);
      } catch (error: any) {
        console.error(
          `Error al eliminar datos de ${modelKey}: ${error.message}`,
        );
      }
    } else {
      // Puede que algunos archivos no mapeen directamente a un modelo, así que es una advertencia.
      console.warn(
        `Modelo ${modelKey} (derivado de ${fileName}) no encontrado en el cliente Prisma o no soporta deleteMany. Omitiendo limpieza.`,
      );
    }
  }
  console.log('Limpieza de datos finalizada.');
}

async function main() {
  // Si '__dirname' da problemas (común en módulos ES con ts-node sin configuración específica),
  // asegúrate de haber descomentado y usado el bloque de 'fileURLToPath' al inicio del archivo.
  const dataDirectory = path.join(__dirname, 'seedData'); // Directorio donde residen tus archivos JSON

  const orderedFileNames = [
    'points_of_sales.json', // (Ej: pointOfSale o pointsOfSales en Prisma)
    'products_categories.json', // (Ej: productCategory o productsCategories)
    'providers.json', // (Ej: provider o providers)
    'products.json',
    'employees.json',
    'salary.json',
    'purchases.json',
    'products_purchases.json', // (Ej: productPurchase o productsPurchases)
    'sales.json',
    'products_sales.json', // (Ej: productSale o productsSales)
    // "users.json",
    // "expenses_category.json",
    // "expenses.json",
  ];

  // 1. Eliminar todos los datos en el orden correcto
  await deleteAllData(orderedFileNames);

  console.log('\nIniciando la siembra de datos...');
  // 2. Sembrar los datos en el orden especificado
  for (const fileName of orderedFileNames) {
    const filePath = path.join(dataDirectory, fileName);
    let jsonData: any[];

    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      jsonData = JSON.parse(fileContent);
    } catch (error: any) {
      console.error(
        `Error al leer o parsear el archivo JSON ${fileName}: ${error.message}. Omitiendo este archivo.`,
      );
      continue;
    }

    if (!Array.isArray(jsonData)) {
      console.error(
        `El contenido de ${fileName} no es un array. Omitiendo este archivo.`,
      );
      continue;
    }

    if (jsonData.length === 0) {
      console.log(`No hay datos para sembrar en ${fileName}. Omitiendo.`);
      continue;
    }

    const modelKey = filenameToPrismaModelKey(fileName);
    const model: any = prisma[modelKey as keyof typeof prisma];

    if (!model) {
      console.error(
        `No se encontró un modelo Prisma para la clave: ${modelKey} (derivado de ${fileName}). Omitiendo.`,
      );
      continue;
    }

    // Intentar usar createMany para eficiencia, con fallback a create individualmente.
    if (typeof model.createMany === 'function') {
      console.log(
        `Sembrando ${jsonData.length} registros en ${modelKey} usando createMany...`,
      );
      try {
        const result = await model.createMany({
          data: jsonData,
          skipDuplicates: true, // Opcional: útil para evitar errores si algún dato ya existe por alguna razón.
          // Nota: skipDuplicates es soportado principalmente por PostgreSQL y SQLite.
          // Puede que necesites quitarlo o manejarlo diferente para otros SGBD.
        });
        console.log(
          `Se sembraron ${result.count} registros en ${modelKey} desde ${fileName}.`,
        );
      } catch (e: any) {
        console.error(
          `Error durante createMany para ${modelKey} desde ${fileName}: ${e.message}. ` +
            `Esto puede suceder si 'skipDuplicates' no es compatible o hay otros problemas de integridad. ` +
            `Intentando sembrar uno por uno...`,
        );
        // Fallback a crear uno por uno
        let count = 0;
        for (const record of jsonData) {
          try {
            await model.create({ data: record });
            count++;
          } catch (indivError: any) {
            console.error(
              `Error al crear registro individual en ${modelKey} con datos ${JSON.stringify(record, null, 2)}: ${indivError.message}`,
            );
          }
        }
        console.log(
          `Se sembraron ${count} registros (uno por uno) en ${modelKey} desde ${fileName}.`,
        );
      }
    } else if (typeof model.create === 'function') {
      console.log(
        `Sembrando ${jsonData.length} registros en ${modelKey} usando create (uno por uno)...`,
      );
      let count = 0;
      for (const record of jsonData) {
        try {
          await model.create({ data: record });
          count++;
        } catch (e: any) {
          console.error(
            `Error al crear registro en ${modelKey} con datos ${JSON.stringify(record, null, 2)}: ${e.message}`,
          );
        }
      }
      console.log(
        `Se sembraron ${count} registros en ${modelKey} desde ${fileName}.`,
      );
    } else {
      console.error(
        `El modelo ${modelKey} no tiene un método 'create' o 'createMany'. Omitiendo.`,
      );
    }
  }
  console.log('\nSiembra de datos finalizada.');
}

main()
  .catch(async (e) => {
    console.error('Error no manejado en el script principal de siembra:', e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    console.log('Desconectando el cliente Prisma...');
    await prisma.$disconnect();
  });
