import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    { name: 'tenant', type: 'relationship', relationTo: 'tenants', required: false }
    // Email added by default
    // Add more fields as needed
  ],
}
