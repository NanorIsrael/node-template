import express from 'express'
const app = express()
const port = 3000



const db = [
  {
    id: 1,
    user: "IUser",
    is_deleted: false,
    created_at: Date.now(),
    updated_at: null,
    business_type: 'sole proprietory',
    business_name: "Younsong co",
    is_kyc_submitted: false,
    address:  null,
    is_approved: false,
    business_docs_submitted: false,
    public_business_id: null,
    registration_documents: null,
    id_image_director_1: null,
    id_image_director_2: null,
    logo: null,
    tax_identification: null,
  },
  {
    id: 2,
    user: "IUser",
    is_deleted: false,
    created_at: Date.now(),
    updated_at: null,
    business_type: 'sole proprietory',
    business_name: "Widama Pharmaceuticals",
    is_kyc_submitted: false,
    address:  null,
    is_approved: false,
    business_docs_submitted: false,
    public_business_id: null,
    registration_documents: null,
    id_image_director_1: null,
    id_image_director_2: null,
    logo: null,
    tax_identification: null,
  },
  {
    id: 3,
    user: "IUser",
    is_deleted: false,
    created_at: Date.now(),
    updated_at: null,
    business_type: 'sole proprietory',
    business_name: "TT Beverages",
    is_kyc_submitted: false,
    address:  null,
    is_approved: false,
    business_docs_submitted: false,
    public_business_id: null,
    registration_documents: null,
    id_image_director_1: null,
    id_image_director_2: null,
    logo: null,
    tax_identification: null,
  },
  {
    id: 4,
    user: "IUser",
    is_deleted: false,
    created_at: Date.now(),
    updated_at: null,
    business_type: 'sole proprietory',
    business_name: "Ali Casino",
    is_kyc_submitted: false,
    address:  null,
    is_approved: false,
    business_docs_submitted: false,
    public_business_id: null,
    registration_documents: null,
    id_image_director_1: null,
    id_image_director_2: null,
    logo: null,
    tax_identification: null,
  },
  {
    id: 5,
    user: "IUser",
    is_deleted: false,
    created_at: Date.now(),
    updated_at: null,
    business_type: 'sole proprietory',
    business_name: "Taugye LTD",
    is_kyc_submitted: false,
    address:  null,
    is_approved: false,
    business_docs_submitted: false,
    public_business_id: null,
    registration_documents: null,
    id_image_director_1: null,
    id_image_director_2: null,
    logo: null,
    tax_identification: null,
  },
  {
    id: 6,
    user: "IUser",
    is_deleted: false,
    created_at: Date.now(),
    updated_at: null,
    business_type: 'sole proprietory',
    business_name: "Limang capital",
    is_kyc_submitted: false,
    address:  null,
    is_approved: false,
    business_docs_submitted: false,
    public_business_id: null,
    registration_documents: null,
    id_image_director_1: null,
    id_image_director_2: null,
    logo: null,
    tax_identification: null,
  },
  {
    id: 7,
    user: "IUser",
    is_deleted: false,
    created_at: Date.now(),
    updated_at: null,
    business_type: 'sole proprietory',
    business_name: "Nanor Corpo",
    is_kyc_submitted: false,
    address:  null,
    is_approved: false,
    business_docs_submitted: false,
    public_business_id: null,
    registration_documents: null,
    id_image_director_1: null,
    id_image_director_2: null,
    logo: null,
    tax_identification: null,
  },
  {
    id: 8,
    user: "IUser",
    is_deleted: false,
    created_at: Date.now(),
    updated_at: null,
    business_type: 'sole proprietory',
    business_name: "Abi coutre",
    is_kyc_submitted: false,
    address:  null,
    is_approved: false,
    business_docs_submitted: false,
    public_business_id: null,
    registration_documents: null,
    id_image_director_1: null,
    id_image_director_2: null,
    logo: null,
    tax_identification: null,
  },
  {
    id: 9,
    user: "IUser",
    is_deleted: false,
    created_at: Date.now(),
    updated_at: null,
    business_type: 'sole proprietory',
    business_name: "Labraska Eats",
    is_kyc_submitted: false,
    address:  null,
    is_approved: false,
    business_docs_submitted: false,
    public_business_id: null,
    registration_documents: null,
    id_image_director_1: null,
    id_image_director_2: null,
    logo: null,
    tax_identification: null,
  },
  {
    id: 10,
    user: "IUser",
    is_deleted: false,
    created_at: Date.now(),
    updated_at: null,
    business_type: 'sole proprietory',
    business_name: "Luxury hats",
    is_kyc_submitted: false,
    address:  null,
    is_approved: false,
    business_docs_submitted: false,
    public_business_id: null,
    registration_documents: null,
    id_image_director_1: null,
    id_image_director_2: null,
    logo: null,
    tax_identification: null,
  }
]
app.get('/business/', (req, res) => {
  res.json(db)
})

app.get('/business/:id', (req, res) => {
  const businessId = req.params.id
  console.log(businessId)
  db.forEach(business => {
    if (business.id === parseInt(businessId)) {
      business.is_approved = true
    }
  })
   res.json(db)
})

app.get('/business/:id/block', (req, res) => {
  const businessId = req.params.id
  console.log(businessId)
  db.forEach(business => {
    if (business.id === parseInt(businessId)) {
      business.is_deleted = true
    }
  })
   res.json(db)
})

app.get('/business/:id/detail', (req, res) => {
  const businessId = req.params.id
  console.log(businessId)
  let result = null
  result = db.find(business => {
    if (business.id === parseInt(businessId)) {
      return business
    }
  })
   res.json(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})