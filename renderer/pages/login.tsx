import { Formik, Form } from 'formik';
import { Input, Button } from '../components';

export default function Login() {
  return (
    <>
      <div className="bg-[#FFF] text-[#64748B] grid md:grid-cols-2 grid-cols-1 min-h-screen">
        {/* Logo */}
        <div className="flex flex-col gap-[36px] items-center justify-center">
          <div className="px-[12px]">
            <img src="/logo.png" alt="logo" />
          </div>
          <p className="hidden md:flex text-[16px] font-[400]  max-w-[318px] text-center">
            All in one solution to migrate data between SyncroMSP and SuperOps.Ai
          </p>
          <div>
            <img src="/images/left-image.png" alt="left-image" className="hidden md:flex max-w-[349px]" />
          </div>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-[36px] items-center justify-center">
          <h1 className="md:text-[33px] text-[22px] text-center uppercase text-[#2EC4B6]">Login</h1>

          <Formik
            initialValues={{ email: '', password: '' }}
            // Add your validation schema here if needed
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className=" flex flex-col gap-[30px] w-full max-w-[428px] p-[12px]">
                {/* Input fields */}

                <Input name="email" type="email" label="Email" placeholder="you@example.com" />

                {/* Signup + forgot password */}
                <div>
                  <Input name="password" type="password" label="Password" placeholder="••••••••••••" />
                  <div className="flex justify-between text-[12px] text-[#000] mt-0">
                    <p>Don’t Have an Account? Sign Up Now</p>
                    <p>Forgot Password?</p>
                  </div>
                </div>
                {/* Sign In button */}
                <Button type="submit" className="flex justify-center items-center">
                  Sign In
                </Button>

                {/* Sign in with Microsoft button */}
                <Button type="button" onClick={() => {}} className="flex gap-[14px] items-center justify-center bg-[#2fcbbba1]">
                  <img src="/images/microsoft.png" alt="microsoft" className="w-[20px]" />
                  <div>Sign in with Microsoft</div>
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
