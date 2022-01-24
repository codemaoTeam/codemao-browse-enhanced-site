<template>
  <div>
    <el-alert title="说明" :closable="false" show-icon>
      完成相应任务后请发送完成后的图片及相关内容到邮箱 cbe@codemao.work 并注明
      <strong>【领奖】</strong>
      关键字，待官方证实后奖励到账
    </el-alert>
    <el-table :data="promoteContent">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="table-expand">
            <el-form-item label="项目名称">
              <span>{{ props.row.project }}</span>
            </el-form-item>
            <el-form-item label="具体描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="项目要求">
              <span>{{ props.row.requirement }}</span>
            </el-form-item>
            <el-form-item label="完成奖励">
              <span>{{ props.row.award }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="项目名称"
        prop="project"
        width="200"
      ></el-table-column>
      <el-table-column label="完成奖励" prop="award"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      promoteContent: [
        {
          project: '发帖推广',
          desc: '在编程猫社区（必须）以及各大社交平台（可选）发帖推广CBE扩展',
          requirement: '图文并茂，内容充实',
          award: 'null',
        },
      ],
    };
  },
};
</script>

<style>
.table-expand {
  font-size: 0;
  margin: 0 57px;
}
.table-expand label {
  width: 90px;
  color: #99a9bf;
}
.table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}
</style>
