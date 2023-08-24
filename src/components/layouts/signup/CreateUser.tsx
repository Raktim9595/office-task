interface SignupProps {
  children?: React.ReactNode;
}

const CreateUser = ({ children }: SignupProps) => {
  return (
    <main className="signup__page">
      <section className="signup__wrapper">
        {children}
      </section>
    </main>
  )
}

export default CreateUser