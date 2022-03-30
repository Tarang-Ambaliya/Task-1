import {
    Input,
    FormLabel,
    Container,
    Textarea,
    Select,
    Button,
    Box,
    FormControl,
    Text,
} from "@chakra-ui/react"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { display } from "../../features/display/displaySlice"

import TodoValidationSchema from "../../Validation"

const IndexForm: React.FC = () => {
    const dispatch = useDispatch()
    const StatusOptions = {
        CREATE: "Create",
        UPDATE: "Update",
        DELETE: "Delete",
    }

    const { touched, errors, setFieldValue, values, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            title: "",
            desc: "",
            status: "",
        },
        validationSchema: TodoValidationSchema,
        onSubmit: (values) => {
            console.log(values)
            dispatch(
                display({
                    email: values.email,
                    title: values.title,
                    desc: values.desc,
                    status: values.status,
                })
            )
            // alert(JSON.stringify(values, null, 2))
        },
    })
    return (
        <>
            <Box display="flex" margin="95px">
                <Container height="fit-content">
                    <FormControl>
                        <FormLabel>Email Address</FormLabel>
                        <Input
                            size="md"
                            width="400px"
                            name="email"
                            onChange={(e) => {
                                setFieldValue("email", e.target.value)
                            }}
                            value={values.email}
                            isInvalid={Boolean(errors.email)}
                            errorBorderColor="crimson"
                        />
                        {touched.email && errors.email ? (
                            <div>
                                <Text fontSize="sm" color="#718096">
                                    {errors.email}
                                </Text>
                            </div>
                        ) : null}
                    </FormControl>

                    <FormControl>
                        <FormLabel marginTop={8}>Task Title</FormLabel>
                        <Input
                            size="md"
                            width="400px"
                            name="title"
                            onChange={(e) => {
                                setFieldValue("title", e.target.value)
                            }}
                            value={values.title}
                            isInvalid={Boolean(errors.title)}
                            errorBorderColor="crimson"
                        />
                        {touched.title && errors.title ? (
                            <div>
                                <Text fontSize="sm" color="#718096">
                                    {errors.title}
                                </Text>
                            </div>
                        ) : null}
                    </FormControl>

                    <FormControl>
                        <FormLabel marginTop={8}>Task Description</FormLabel>
                        <Textarea
                            width="400px"
                            name="desc"
                            onChange={(e) => {
                                setFieldValue("desc", e.target.value)
                            }}
                            value={values.desc}
                            isInvalid={Boolean(errors.desc)}
                            errorBorderColor="crimson"
                        />
                        {touched.desc && errors.desc ? (
                            <div>
                                <Text fontSize="sm" color="#718096">
                                    {errors.desc}
                                </Text>
                            </div>
                        ) : null}
                    </FormControl>

                    <FormControl>
                        <FormLabel marginTop={8}>Select Status</FormLabel>
                        <Select
                            size="md"
                            width="400px"
                            name="status"
                            onChange={(e) => {
                                setFieldValue("status", e.target.value)
                            }}
                            value={values.status}
                            isInvalid={Boolean(errors.status)}
                            errorBorderColor="crimson"
                        >
                            <option value="Create">
                                {StatusOptions.CREATE}
                            </option>
                            <option value="Update">
                                {StatusOptions.UPDATE}
                            </option>
                            <option value="Delete">
                                {StatusOptions.DELETE}
                            </option>{" "}
                        </Select>
                        {touched.status && errors.status ? (
                            <div>
                                <Text fontSize="sm" color="#718096">
                                    {errors.status}
                                </Text>
                            </div>
                        ) : null}
                    </FormControl>

                    <FormControl>
                        <Button
                            marginTop={8}
                            colorScheme="teal"
                            size="lg"
                            type="submit"
                            width="80px"
                            onClick={() => handleSubmit()}
                        >
                            Save
                        </Button>
                    </FormControl>
                </Container>
            </Box>
        </>
    )
}
export default IndexForm
