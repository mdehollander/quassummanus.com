export interface HomepageContentType {
  title: string
  subtitle: string
  productSections: HomepageProductsSection[]
}

export interface HomepageProductsSection {
  title: string
  items: HomepageProduct[]
}

export interface HomepageProduct {
  name: string
  description: string
  src: string
  url: string
  appStoreLink?: string
  googlePlayLink?: string
  customLink?: string
  customLinkIcon?: string
}
