// <!-- <script setup lang="ts">
// import TheWelcome from "../components/TheWelcome.vue";
// </script>

// <template>
//   <main>
//     <TheWelcome />
//   </main>
// </template> -->
import { defineComponent, ref } from "vue"
import { useTestStore } from "@/store/todos"

export default defineComponent({
  props: {
    params: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const store = useTestStore() // 使用store
    const { title } = store
    const str = ref<string>("tsx的使用")
    const clickFunc1 = () => {
      console.log("没有参数")
    }
    const clickFunc2 = (msg: string = "默认值") => {
      console.log(msg)
      console.log(props.params)
    }
    store.$onAction(
      ({
        name, // action 的名字
        // store, // store 实例
        args, // 调用这个 action 的参数
        after, // 在这个 action 执行完毕之后，执行这个函数
        onError, // 在这个 action 抛出异常的时候，执行这个函数
      }) => {
        const startTime = Date.now()
        // 这将在 `store` 上的操作执行之前触发
        console.log(`Start "${name}" with params [${args.join(", ")}].`)
        // 如果 action 成功并且完全运行后，after 将触发。
        // 它将等待任何返回的 promise
        after((result) => {
          console.log(`Finished "${name}" after ${Date.now() - startTime}ms.\nResult: ${result}.`)
        })
        // 如果 action 抛出或返回 Promise.reject ，onError 将触发
        onError((error) => {
          console.warn(`Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`)
        })
      }
      //要在卸载组件后保留它们，请将 true 作为第二个参数传递给当前组件
      // true
    )
    return () => (
      <>
        <div class="async">{str.value}</div>
        <button onClick={clickFunc1}>不传参数点击</button>
        <button onClick={() => clickFunc2("额外参数")}>传参数点击</button>
        <div>当前title: {title}</div>
        <el-row class="mb-4">
          <el-button>Default</el-button>
          <el-button type="primary">Primary</el-button>
          <el-button type="success">Success</el-button>
          <el-button type="info">Info</el-button>
          <el-button type="warning">Warning</el-button>
          <el-button type="danger">Danger</el-button>
        </el-row>
        {/* 使用tailwindcss */}
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-48"
                src="/img/store.jpg"
                alt="Man looking at item at a store"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Case study
              </div>
              <a
                href="#"
                class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                Finding customers for your new business
              </a>
              <p class="mt-2 text-gray-500">
                Getting a new business off the ground is a lot of hard work. Here are five ideas you
                can use to find your first customers.
              </p>
            </div>
          </div>
        </div>
      </>
    )
  },
})
