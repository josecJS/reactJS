import LoginButton from './LoginButton.component';
import renderer from 'react-test-renderer';

describe("Componete botón", () => {
  test("Es igual a la snapshot del componente", () => {
    const button = renderer.create(<LoginButton />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});