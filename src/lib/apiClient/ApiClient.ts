/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { AuthService } from './services/AuthService';
import { CustomerService } from './services/CustomerService';
import { CustomerContactService } from './services/CustomerContactService';
import { HaulerService } from './services/HaulerService';
import { HaulZoneService } from './services/HaulZoneService';
import { IdentityService } from './services/IdentityService';
import { LocationService } from './services/LocationService';
import { NotesAndDocumentsService } from './services/NotesAndDocumentsService';
import { OrderService } from './services/OrderService';
import { OrderProductService } from './services/OrderProductService';
import { PricingService } from './services/PricingService';
import { ProductService } from './services/ProductService';
import { QuoteService } from './services/QuoteService';
import { QuoteProductService } from './services/QuoteProductService';
import { RegionService } from './services/RegionService';
import { ResourcesService } from './services/ResourcesService';
import { TaxCodeService } from './services/TaxCodeService';
import { TruckService } from './services/TruckService';
import { UdfService } from './services/UdfService';
import { YardService } from './services/YardService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ApiClient {

    public readonly auth: AuthService;
    public readonly customer: CustomerService;
    public readonly customerContact: CustomerContactService;
    public readonly hauler: HaulerService;
    public readonly haulZone: HaulZoneService;
    public readonly identity: IdentityService;
    public readonly location: LocationService;
    public readonly notesAndDocuments: NotesAndDocumentsService;
    public readonly order: OrderService;
    public readonly orderProduct: OrderProductService;
    public readonly pricing: PricingService;
    public readonly product: ProductService;
    public readonly quote: QuoteService;
    public readonly quoteProduct: QuoteProductService;
    public readonly region: RegionService;
    public readonly resources: ResourcesService;
    public readonly taxCode: TaxCodeService;
    public readonly truck: TruckService;
    public readonly udf: UdfService;
    public readonly yard: YardService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '1',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.auth = new AuthService(this.request);
        this.customer = new CustomerService(this.request);
        this.customerContact = new CustomerContactService(this.request);
        this.hauler = new HaulerService(this.request);
        this.haulZone = new HaulZoneService(this.request);
        this.identity = new IdentityService(this.request);
        this.location = new LocationService(this.request);
        this.notesAndDocuments = new NotesAndDocumentsService(this.request);
        this.order = new OrderService(this.request);
        this.orderProduct = new OrderProductService(this.request);
        this.pricing = new PricingService(this.request);
        this.product = new ProductService(this.request);
        this.quote = new QuoteService(this.request);
        this.quoteProduct = new QuoteProductService(this.request);
        this.region = new RegionService(this.request);
        this.resources = new ResourcesService(this.request);
        this.taxCode = new TaxCodeService(this.request);
        this.truck = new TruckService(this.request);
        this.udf = new UdfService(this.request);
        this.yard = new YardService(this.request);
    }
}
