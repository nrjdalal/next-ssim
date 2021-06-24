const chairmans_message = () => {
  return (
    <>
      <div className="container mx-auto prose my-12 px-5 text-center">
        <h2 className="italic">Fee Strucutre</h2>

        <h4>Registration Fees: INR 50,000/-</h4>
        <li>At the time of Admission</li>

        <h4>Tuition Fees: INR 5,40,000/-</h4>
        <li>Payable in four installments</li>

        <h4>Total Fee: INR 5,90,000/-</h4>
        <li>Inclusive of Laptop and International Study Tour</li>
        <li>Exclusive of INR 5,000/- for Business Suit</li>

        <br />

        <table>
          <thead>
            <tr>
              <th>
                <strong>Installment</strong>
              </th>
              <th>
                <strong>Type</strong>
              </th>
              <th>
                <strong>Amount</strong>
              </th>
              <th>
                <strong>Due Date</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Registration</td>
              <td>Admission</td>
              <td>Rs.50,000</td>
              <td>At the time of Registration</td>
            </tr>
            <tr>
              <td>First</td>
              <td>Tuition</td>
              <td>Rs.1,50,000</td>
              <td>Within 30 days of Registration</td>
            </tr>
            <tr>
              <td>Second</td>
              <td>Tuition</td>
              <td>Rs.1,50,000</td>
              <td>Before 15th December 2021</td>
            </tr>
            <tr>
              <td>Third</td>
              <td>Tuition</td>
              <td>Rs.1,20,000</td>
              <td>Before 15th June 2022</td>
            </tr>
            <tr>
              <td>Fourth</td>
              <td>Tuition</td>
              <td>Rs.1,20,000</td>
              <td>Before 15th November 2022</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td></td>
              <td>
                <strong>Rs.5,90,000</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="italic">RTGS / NEFT / BANK TRANSFER</h2>

        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>NAME</strong>
              </td>
              <td>SRI SUKHMANI INSTITUTE OF MANAGEMENT</td>
            </tr>
            <tr>
              <td>
                <strong>BANK</strong>
              </td>
              <td>PUNJAB NATIONAL BANK</td>
            </tr>
            <tr>
              <td>
                <strong>BRANCH/CITY</strong>
              </td>
              <td>SOUTH EXTENSION PART 1, NEW DELHI</td>
            </tr>
            <tr>
              <td>
                <strong>IFSC CODE</strong>
              </td>
              <td>PUNB0017600</td>
            </tr>
            <tr>
              <td>
                <strong>ACCOUNT NO.</strong>
              </td>
              <td>0176000101132626</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default chairmans_message
