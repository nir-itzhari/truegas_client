import { object, string, number } from "yup"
import * as Yup from "yup"

class ValidateForms {

    public validateSigninSchema = object({

        email:
            string()
                .required("*שדה חובה")
                .email("*נא להקליד אימייל חוקי")
                .max(255)
                .trim(),

        password: string()
            .required("*שדה חובה")
            .matches(/^\S*$/, "*רווחים אסורים")
            .matches(/\d+/, "*סיסמה חייבת להכיל מספר")
            .min(5, "*סיסמה חייבת להכיל מינימום 5 תווים")
            .max(15, "*אורך סיסמה מקסימום 30 תווים")
            .trim()
    })

    public validateRegisterSchema = object({
        firstName:
            string()
                .required("*שדה חובה")
                .matches(/^[\u0590-\u05FF A-Za-z]*$/, "*לא ניתן להכניס מספרים וסימנים מיוחדים")
                .min(2, "*שם פרטי חייב להכיל לפחות 2 תווים")
                .max(30, "*שם פרטי יכול להכיל עד 30 תווים")
                .trim(),

        lastName:
            string()
                .required("*שדה חובה")
                .matches(/^[\u0590-\u05FF A-Za-z]*$/, "*לא ניתן להכניס מספרים וסימנים מיוחדים")
                .min(2, "*שם משפחה חייב להכיל לפחות 2 תווים")
                .max(30, "*שם משפחה יכול להכיל עד 30 תווים")
                .trim(),
        email:
            string()
                .required("*שדה חובה")
                .email("*נא להקליד אימייל חוקי")
                .max(255)
                .trim(),
        // username: string()
        //     .required("*שדה חובה")
        //     .matches(/^[A-Za-z0-9][Aa-z-Z0-9 _]*$/, "Special characters are not allowed")
        //     .min(6, "Username should be minimum 6 characters")
        //     .max(30, "Username should be maximum 30 characters")
        //     .trim(),
        password: string()
            .required("*שדה חובה")
            .matches(/^\S*$/, "*ללא רווחים")
            .matches(/\d+/, "*סיסמה חייבת להכיל לפחות סיפרה אחת")
            .min(6, "*סיסמה חייבת להכיל לפחות 6 תווים")
            .max(15, "*סיסמה יכולה להכיל מקסימום 15 תווים")
            .trim(),

        confirmPassword:
            string()
                .required("*שדה חובה")
                .oneOf([Yup.ref('password')], 'סיסמאות חייבות להיות זהות')
                .matches(/^\S*$/, "*ללא רווחים")
                .matches(/\d+/, "*סיסמה חייבת להכיל לפחות סיפרה אחת")
                .min(6, "*סיסמה חייבת להכיל לפחות 6 תווים")
                .max(15, "*סיסמה יכולה להכיל מקסימום 15 תווים")
                .trim(),
    })


    public addAssignmentFormSchema = object({

        title:
            string()
                .required("*שדה חובה")
                .min(2, "סוג עבודה חייב להכיל מינימום 2 אותיות")
                .max(50, "סוג עבודה חייב להכיל מקסימום 50 אותיות")
                .trim(),

        description:
            string()
                .required("*שדה חובה")
                .min(2, "פירוט חייב להכיל מינימום 2 אותיות")
                .max(255, "פירוט חייב להכיל מקסימום 255 אותיות")
                .trim(),

        price:
            number()
                .typeError('*שדה חובה - ערך חייב להיות מספרים בלבד')
                .required('*שדה חובה')
                .min(0, 'מחיר לא יכול להיות שלילי'),
    })


    public validateContactUsSchema = object({
        name:
            string()
                .required("Name is required")
                .matches(/[\u0590-\u05eaa-zA-Z]+$/i, "Numbers and Special characters are not allowed")
                .min(2, "Name should be minimum 2 characters")
                .max(30, "Name should be maximum 30 characters")
                .trim(),

        email:
            string()
                .required("Email is required")
                .email("Please enter valid email")
                .max(255)
                .trim(),

        subject:
            string()
                .required("Subject is required")
                .min(6, "Subject should be minimum 6 characters")
                .max(30, "Subject should be maximum 30 characters")
                .trim(),

        message:
            string()
                .required("Message is required")
                .max(255, "Message can contain 255 characters")
                .trim(),
    })

}
const validateForms = new ValidateForms()
export default validateForms