export type TInvoiceInfo = {
  id: number;
  customId: string;
  userId: number;
  projectId: number;
  billingId: number;
  invoiceTitle: string;
  localCurrency: string;
  convertRatio: number;
  paymentStatus: string;
  paymentTime: number;
  timeIssue: number;
  timeDue: number;
  totalItem: number;
  totalPrice: number;
  totalOfferPrice: number;
  totalVat: number;
  totalSaving: number;
  totalPaid: number;
  totalDue: number;
  noteTitle: string;
  noteDescription: string;
  status: string;
  gatewayId: number;
};

export type TAddressBilling = {
  name: string;
  organization: string;
  email: string;
  mobile: string;
  telephone: string;
  fax: string;
  line1: string;
  line2: string;
  line3: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
};

export type TAddressShipping = {
  name: string;
  organization: string;
  email: string;
  mobile: string;
  telephone: string;
  fax: string;
  line1: string;
  line2: string;
  line3: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
};

export type TInvoiceProduct = {
  id: number;
  type: string;
  title: string;
  quantity: number;
  unitName: string;
  domain: string;
  price: number;
  priceOffer: number;
  vat: number;
  totalPrice: number;
  duration: string;
};

export type TPaymentOption = {
  id: number;
  provider: string;
  title: string;
  subTitle: string;
  buttonText: string;
  isDefault: number;
  icon: string;
  priority: number;
  status: string;
};

export type TPaymentIssue = {
  key: string;
  message: string;
};

export type TAddressPayload = {
  type: string;
  name: string;
  organization: string;
  email: string;
  mobile: string;
  telephone: string;
  fax: string;
  line1: string;
  line2: string;
  line3: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
};

export type TInvoiceData = {
  invoice: TInvoiceInfo;
  items: TInvoiceProduct[];
  addressBilling: TAddressBilling;
  addressShipping: TAddressShipping;
  paymentGateways?: TPaymentOption[];
  paymentIssues?: TPaymentIssue[];
  linkDownload: string;
  linkPrint: string;
  transactions?: [];
  notFound?: boolean;
};
