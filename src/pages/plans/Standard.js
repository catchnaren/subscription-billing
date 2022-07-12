import { Fragment, useEffect, useContext } from 'react';
import { UserContext } from '../../context';

const Standard = ({ history, match }) => {
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    let result = [];
    const check = () =>
      state?.user?.subscriptions?.map((sub) => {
        result.push(sub.plan.nickname);
      });
    check();
    const plan = match.path.split('/')[1].toUpperCase();
    if (!result.includes(plan)) {
      history.push('/');
    }
  }, [state && state.user]);

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row py-5 bg-light text-center">
          <h1 className="display-4 fw-bold">STANDARD</h1>
          <p className="lead">
            Here are your 10 exclusive stocks of this month
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 p-5 rounded bg-dark text-light">
            <ul className="lead">
              <li>Tesla</li>
              <li>Microsoft</li>
              <li>PayPal</li>
              <li>Square</li>
              <li>Alibaba</li>
              <li>Gamestop</li>
              <li>Jumia</li>
              <li>Palantir</li>
              <li>Nio</li>
              <li>Space</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Market analysis</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <h4>Email support</h4>
            <p>subscriptions@domain.com</p>
            <h4>Help center</h4>
            1300 123 456
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Standard;
