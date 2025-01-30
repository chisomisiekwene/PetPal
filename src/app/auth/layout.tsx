
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <body
        className=" overflow-x-hidden"
      >
        {children}
      </body>
  );
}
