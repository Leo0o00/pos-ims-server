import {
  getNoStockProducts,
  getPopularProducts,
  getPopularProductsThisMonth,
  getSalesByPopularCategories,
  getTopSellingEmployees,
  getTotalExpensesByMonth,
  getTotalProducts,
  getTotalPurchasesByMonth,
  getTotalSales,
  getTotalSalesByMonth,
  getTotalSalesByPos,
  getTotalSoldsProdByMonth,
} from '@prisma/client/sql';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class MetricsService {
  LIMIT = 5;

  constructor(
    private readonly prismaService: PrismaService,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}

  async listMetrics() {
    // check if data is in cache:
    // const cachedData = await this.cacheService.get('metrics');
    // if (cachedData) {
    //   // console.log(`Getting data from cache!`);
    //   return cachedData;
    // }
    let metricsData: Record<string, any> = [];
    try {
      //Total de ventas del mes(comparar con el total del mes anterior)(Valor)
      const totalSalesThisMonth =
        await this.prismaService.$queryRawTyped(getTotalSales());

      //Productos vendidos en el mes(comparar con el total del mes anterior)(Valor)
      const totalProdsSolds = await this.prismaService.$queryRawTyped(
        getTotalSoldsProdByMonth(),
      );

      //Total de productos en existencia(Valor)
      const inStockProducts =
        await this.prismaService.$queryRawTyped(getTotalProducts());

      //Productos agotados(Valor)
      const noStockProducts =
        await this.prismaService.$queryRawTyped(getNoStockProducts());

      //Trabajadores con mas ventas(Tabla)
      const topSellingEmployees = await this.prismaService.$queryRawTyped(
        getTopSellingEmployees(this.LIMIT),
      );

      //Ventas por puestos de venta(Grafico)
      const salesByPos =
        await this.prismaService.$queryRawTyped(getTotalSalesByPos());

      //Ventas por categorias mas vendidas(Grafico)
      const salesByPopularCategories = await this.prismaService.$queryRawTyped(
        getSalesByPopularCategories(),
      );

      //Productos mas vendidos(Tabla)
      const popularProducts = await this.prismaService.$queryRawTyped(
        getPopularProducts(this.LIMIT),
      );

      //Tendencias en ventas del mes(Tabla)
      const popularProductsThisMonth = await this.prismaService.$queryRawTyped(
        getPopularProductsThisMonth(),
      );

      //Total de ventas del mes(comparar con el total de los meses anteriores del año)(Grafico)
      const totalSalesByMonth = await this.prismaService.$queryRawTyped(
        getTotalSalesByMonth(),
      );

      //Total de inversion del mes(comparar con el total de los meses anteriores del año)(Grafico)
      const totalPurchasesByMonth = await this.prismaService.$queryRawTyped(
        getTotalPurchasesByMonth(),
      );

      //Total de gastos del mes(comparar con el total de los meses anteriores del año)(Grafico)
      const totalExpensesByMonth = await this.prismaService.$queryRawTyped(
        getTotalExpensesByMonth(),
      );

      //Total de gastos del mes(separado por categorias)(Grafico) --- Este esta pendiente a cambios
      // const totalExpensesThisMonth = await prisma.$queryRawTyped(getTotalExpensesThisMonth())

      metricsData = {
        totalSalesThisMonth,
        salesByPos,
        salesByPopularCategories,
        totalSalesByMonth,
        totalPurchasesByMonth,
        // totalExpensesByMonth,
        totalProdsSolds,
        inStockProducts,
        noStockProducts,
        popularProducts,
        popularProductsThisMonth,
        topSellingEmployees,
        // totalExpensesThisMonth,
      };
    } catch (error) {
      console.error(`ERROR AL LISTAR LAS METRICAS.`, error);
      throw new InternalServerErrorException(
        'Unespected error. Check the logs.',
      );
    }
    // await this.cacheService.set('metrics', metricsData);
    return metricsData;
  }
}
