import { Button, Card, Form, Input, message } from 'antd'
import './index.scss'
import logo from '../../assets/logo.png'
import { useDispatch } from 'react-redux'
import { fetchLogin } from '../../store/modules/user'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  // 13800000002
  // 246810

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onFinish = async (values) => {
    // console.log(values);
    // 出发异步action
    await dispatch(fetchLogin(values))
    navigate('/')
    message.success('登陆成功')
  } 

  return (
    <div className='login'>
      <Card className='login-container'>
        <img className="login-logo" src={logo} alt="" />
        <Form 
          validateTrigger='onBlur'
          onFinish={onFinish}
          >
          <Form.Item
            label="手机号"
            name="mobile"
            rules={[
              { required: true, 
                message: '请输入手机号码!' 
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '请输入正确的手机号格式'
              }
            ]}
          >
            <Input size='large' placeholder='请输入手机号码'></Input>
          </Form.Item>
          <Form.Item
            label="验证码"
            name="code"
            rules={[
              { 
                required: true, 
                message: '请输入验证码!' 
              }
            ]}
          >
            <Input size='large' placeholder='请输入验证码'></Input>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' size='large' block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login