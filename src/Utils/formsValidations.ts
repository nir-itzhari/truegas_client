import { object, string, number, mixed } from "yup"
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
                .required("First Name is required")
                .matches(/^[A-Za-z _]*$/, "Numbers and Special characters are not allowed")
                .min(2, "First Name should be minimum 2 characters")
                .max(30, "First Name should be maximum 30 characters")
                .trim(),

        lastName:
            string()
                .required("Last Name is required")
                .matches(/^[A-Za-z _]*$/, "Numbers and Special characters are not allowed")
                .min(2, "Last Name should be minimum 2 characters")
                .max(30, "Last Name should be maximum 30 characters")
                .trim(),

        username: string()
            .required("Username is required")
            .matches(/^[A-Za-z0-9][Aa-z-Z0-9 _]*$/, "Special characters are not allowed")
            .min(6, "Username should be minimum 6 characters")
            .max(30, "Username should be maximum 30 characters")
            .trim(),

        password: string()
            .required("Password is required")
            .matches(/^\S*$/, "White spaces are not allowed")
            .matches(/\d+/, "Password must contain minimum one number")
            .min(8, "Password should be minimum 8 characters")
            .max(15, "Password should be maximum 30 characters")
            .trim(),

        confirmPassword:
            string()
                .required("Confirm Password is required")
                .oneOf([Yup.ref('password')], 'Password must be same!')
                .matches(/^\S*$/, "White spaces are not allowed")
                .matches(/\d+/, "Password must contain minimum one number")
                .min(8, "Password should be minimum 8 characters")
                .max(15, "Password should be maximum 30 characters")
                .trim()
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