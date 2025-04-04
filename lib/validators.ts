import {z} from 'zod';
import { formatNumberWithDecimal } from './utils';

const currency =  z
.string()
.refine((value)=> /^\d+\.\d{2}$/.test(formatNumberWithDecimal(Number(value))), 
'Price must have exactly two decimal places');


// Schema for inserting products

export const insertProductsSchema = z.object({
    name : z.string(). min(3, 'Name must be atleast 3 characters'),
    slug : z.string(). min(3, 'Slug must be atleast 3 characters'),
    category : z.string(). min(3, 'Category must be atleast 3 characters'),
    brand : z.string(). min(3, 'Brand must be atleast 3 characters'),
    description : z.string(). min(3, 'Description must be atleast 3 characters'),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1, 'Minimum requiremnts for the images is 1'),
    isFeatured : z.boolean(),
    banner: z.string().nullable(),
    price : currency,
    
})

// schema for signing users in

export const signInFormSchema = z.object({
    email : z.string().email('Invalid email Address'),
    password: z.string().min(6, 'Password must be at least 6 characters ')
});