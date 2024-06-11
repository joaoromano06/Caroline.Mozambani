// Adiciona horários à lista
const horarioSelect = document.getElementById("horario");
const horarios = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30"
];

// Suponha que estes horários estão ocupados (Exemplo)
const horariosOcupados = ["08:30", "10:00", "14:00", "16:00"];

horarios.forEach(horario => {
    const option = document.createElement("option");
    option.value = horario;
    option.text = horario;
    // Adiciona classe "ocupado" se o horário estiver na lista de horários ocupados
    if (horariosOcupados.includes(horario)) {
        option.classList.add("ocupado");
    }
    horarioSelect.appendChild(option);
});

// Processa o formulário de agendamento
const agendamentoForm = document.getElementById("agendamento-form");
agendamentoForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById("nome").value;
    const celular = document.getElementById("celular").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;

    // Exibe os dados em um alerta (substitua por um envio para o backend ou API)
    alert(`Agendamento realizado com sucesso!\nNome: ${nome}\nCelular: ${celular}\nData: ${data}\nHorário: ${horario}`);
});