import "./SignUpLayout.css";

interface SignupProps {
  children?: React.ReactNode;
};

const SignUpLayout = ({ children }: SignupProps) => {
  return (
    <main className="signin__page">
      <section className='signup__wrapper'>
        {children}
      </section>
    </main>
  )
}

export default SignUpLayout;